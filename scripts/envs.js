const { writeFileSync, mkdirSync, readFileSync, existsSync } = require('fs');
const dotenv = require('dotenv');

const envDir = './src/environments';
mkdirSync(envDir, { recursive: true });

function generateEnvFile(env, outputPath) {
  const requiredKeys = [
    'URL_ENDPOINT',
    'SECURITY_KEY',
    'SECURIY_KEY_TEST',
  ];

  for (const key of requiredKeys) {
    if (!env[key]) {
      throw new Error(`Falta la variable ${key} para generar ${outputPath}`);
    }
  }

  const content = `
export const environment = {
  URL_ENDPOINT: '${env.URL_ENDPOINT}',
  SECURITY_KEY: '${env.SECURITY_KEY}',
  SECURIY_KEY_TEST: '${env.SECURIY_KEY_TEST}',
};
`;

  writeFileSync(outputPath, content);
  console.log(`✔️  Archivo generado: ${outputPath}`);
}

try {
  // GitHub Actions usa process.env
  if (process.env.CI) {
    console.log('🚀 Ejecutando en GitHub Actions');
    generateEnvFile(process.env, `${envDir}/environment.ts`);
  } else {
    console.log('🛠️ Ejecutando en local');
    const devEnv = dotenv.parse(readFileSync('.env'));
    const prodEnv = existsSync('.env.prod') ? dotenv.parse(readFileSync('.env.prod')) : devEnv;
    const testEnv = existsSync('.env.development') ? dotenv.parse(readFileSync('.env.development')) : devEnv;

    generateEnvFile(devEnv, `${envDir}/environment.development.ts`);
    generateEnvFile(prodEnv, `${envDir}/environment.ts`);
    generateEnvFile(testEnv, `${envDir}/environment.devProduction.ts`);
  }
} catch (err) {
  console.error('❌ Error generando archivos de entorno:', err.message);
  process.exit(1);
}

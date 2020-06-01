import * as fs from 'fs';
let pathFolder = process.env.DIMMediator_HOME;
if (!pathFolder) {
  if (!fs.existsSync('./files')) {
    fs.mkdirSync('./files');
  }
  if (!fs.existsSync('./files/config.json')) {
    fs.writeFileSync('./files/config.json', fs.readFileSync('./config.example.json'));
  }
  pathFolder = __dirname.split('/src/core/utilities').join('') + '/files';
}
const config = JSON.parse(
  fs.readFileSync(pathFolder + '/' + 'config.json', 'utf8'),
);

export function getDataBaseConfiguration() {
  return {
    ...config.database,

    // synchronize: false,
    // migrationsRun: true,

    // synchronize: true,
    // migrationsRun: false,
    // database: 'DIMMediator4_new',
    entities: ['src/**/*.entity{.ts,.js}'],
    migrations: ['src/database/migration/*.ts'],
  };
}
export function getConfiguration() {
  const files = config.files || {};
  if (!config.port) {
    config.port = 3000;
  }
  if (!files.apps) {
    files.apps = pathFolder + '/' + 'apps';
  }
  if (!files.temp) {
    files.temp = pathFolder + '/' + 'temp';
  }
  if (!fs.existsSync(files.apps)) {
    fs.mkdirSync(files.apps);
  }
  if (!fs.existsSync(files.temp)) {
    fs.mkdirSync(files.temp);
  }
  return {
    ...config,
    ...files,
  };
}

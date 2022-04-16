import 'dotenv/config';

const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD, // Password optional, prompted if none given
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT,
    localRoot: __dirname + "/public",
    remoteRoot: process.env.FTP_REMOTEROOT,
    include: ["*", "**/*"], // this would upload everything except dot files
    exclude: [ 
        // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
        "dist/**/*.map",
        "node_modules/**",
        "node_modules/**/.*",
        ".git/**",
    ],
    deleteRemote: false, // delete ALL existing files at destination before uploading, if true
    forcePasv: true, // Passive mode is forced (EPSV command is not sent)
    sftp: false, // use sftp or ftp
};

//? DEPLOY
ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));

//? UPLOADING
ftpDeploy.on("uploading", function (data) {
  console.log(data.totalFilesCount); // total file count being transferred
  console.log(data.transferredFileCount); // number of files transferred
  console.log(data.filename); // partial path with filename being uploaded
});

//? UPLOADED
ftpDeploy.on("uploaded", function (data) {
  console.log(data); // same data as uploading event
});

//? LOG
ftpDeploy.on("log", function (data) {
  console.log(data); // same data as uploading event
});

//? ON ERROR
ftpDeploy.on("upload-error", function (data) {
  // data will also include filename, relativePath, and other goodies
  console.log(data.err); 
});
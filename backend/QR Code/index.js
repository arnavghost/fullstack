import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "URL",
      message: "Type in your URL: ",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    // Generate QR code and save to file
    const qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', url , (err) => {
      if (err) throw err;
      console.log("the file has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    //   console.error("Prompt couldn't be rendered in the current environment.");
    } else {
    //   console.error("An error occurred:", error);
     }
  });

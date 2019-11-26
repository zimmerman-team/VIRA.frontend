// import fs from 'fs';
// import path from 'path';
// import dotenv from 'dotenv';
// import postmark from 'postmark';

// dotenv.config();

// const client = new postmark.ServerClient(
//   process.env.REACT_APP_POSTMARK_CLIENT_ID
// );

// export function sendMail(name, surname, email, link) {
//   client
//     .sendEmailWithTemplate({
//       TemplateId: 10981638,
//       From: 'zoom@zimmermanzimmerman.nl',
//       To: email,
//       TemplateModel: { name, surname, link },
//       Attachments: [
//         {
//           Content: fs
//             .readFileSync(
//               path.resolve(
//                 __dirname,
//                 '../../src/app/assets/images/zoom_logo.png'
//               )
//             )
//             .toString('base64'),
//           Name: 'zoom_logo.png',
//           ContentType: 'image/png',
//           ContentID: 'cid:zoom_logo.png',
//         },
//       ],
//     })
//     .then(response => response)
//     .catch(error => {
//       return error;
//     });
// }

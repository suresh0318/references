// const jsontoxml = require('jsontoxml');

// function escapeXmlSpecialChars(value) {
//   const entities = {
//     '&': '&amp;',
//     '<': '&lt;',
//     '>': '&gt;',
//     '"': '&quot;',
//     "'": '&apos;'
//   };

//   return String(value).replace(/[&<>"']/g, match => entities[match]);
// }

// function convertToXml(obj, rootElementName) {
//   const buildXml = (obj) => {
//     const xmlArr = [];

//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         const value = obj[key];

//         if (typeof value === 'object') {
//           const childXml = buildXml(value);
//           xmlArr.push({ [key]: childXml });
//         } else {
//           const escapedValue = escapeXmlSpecialChars(value);
//           xmlArr.push({ [key]: escapedValue });
//         }
//       }
//     }

//     return xmlArr;
//   };

//   const xmlObj =  buildXml(obj) ;
//   const xmlString = jsontoxml(xmlObj, { prettyPrint: true });

//   return xmlString;
// }

// // Example usage
// const nestedObject = {
//   person: {
//     name: 'John Doe<temp>',
//     age: 30,
//     address: {
//       street: '123 Main St',
//       city: 'New York',
//       country: 'USA&'
//     }
//   }
// };

// const xml = convertToXml(nestedObject);
// console.log(xml);

const jsontoxml = require("jsontoxml");

function escapeXmlSpecialChars(value) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return String(value).replace(/[&<>"']/g, (match) => entities[match]);
}

function convertToXml(obj) {
  const buildXml = (obj) => {
    if (Array.isArray(obj)) {
      const xmlArr = [];

      for (const item of obj) {
        xmlArr.push(buildXml(item));
      }

      return xmlArr;
    }

    const xmlObj = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (typeof value === "object") {
          const childXml = buildXml(value);
          xmlObj.push({ [key]: childXml });
        } else {
          const escapedValue = escapeXmlSpecialChars(value);
          xmlObj.push({ [key]: escapedValue });
        }
      }
    }

    return xmlObj;
  };

  const xmlObj = buildXml(obj);
  const xmlString = jsontoxml(xmlObj);

  return xmlString;
}

// Example usage
// const arrayOfObjects = [
//   {
//     person: {
//       name: 'John Doe',
//       age: 30,
//       address: {
//         street: '123 Main St',
//         city: 'New York',
//         country: 'USA'
//       }
//     }
//   },
//   {
//     person: {
//       name: 'Jane Smith <Temp>',
//       age: 25,
//       address: {
//         street: '456 Elm St',
//         city: 'Los Angeles',
//         country: 'USA  &'
//       }
//     }
//   }
// ];

const arrayOfObjects = {
  selected: [
    {
      name: "John Doe<temp>",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA&",
      },
    },
    {
      name: "John Doe<temp2>",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA&",
      },
    },
  ],
};

const xml = convertToXml(arrayOfObjects, "root");
console.log(xml);

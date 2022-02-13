import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <table>
        <thead>
        <tr>
          <th>Contact me on</th>
          <th>Follow me on</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Mobile: 8142372393</td>
          <td>
            <a
              href="https://www.facebook.com/profile.php?id=100009969547148"
              target={"_blank"}
            >
              <button>facebook</button>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="mailto:shaikabdulazeez6784@gmail.com?subject=This%20is%20%20about%20your%20ToDo%20page&body=Please%20type%20your%20review%20about%20the%20page%20here"
              target={"_blank"}
            >
              <button>email</button>
            </a>
          </td>
          <td>
            <a href="https://twitter.com/Azeez8142/" target={"_blank"}>
              <button>twitter</button>
            </a>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <a
              href="https://www.linkedin.com/in/abdul-azeez-shaik-874054179/"
              target={"_blank"}
            >
              <button>linkedIn</button>
            </a>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <a
              href="https://www.instagram.com/abdulazeez6784/"
              target={"_blank"}
            >
              <button>Instagram</button>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
      <span>Developed By Abdul Azeez Shaik</span>
    </footer>
  );
}

export default Footer;

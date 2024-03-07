import "./src/styles/global.css"

export const onInitialClientRender = () => {
  const style = document.createElement("style");
  style.innerHTML = `
    /* Target the scrollbar track */
    ::-webkit-scrollbar {
      width: 8px; /* Adjust width as needed */
    }

    ::-webkit-scrollbar-thumb {
      background-color: #f8cf27 !important; /* Change to desired color */
      border-radius: 4px; /* Rounded corners */
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #edc524; /* Change to desired hover color */
    }
  `;
  document.head.appendChild(style);
};

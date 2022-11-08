
export function showMessage(message, type = "success"){
    Toastify({
        text: message,
        duration: 3000,
        /* destination: "https://github.com/apvarun/toastify-js", */
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right", 
        stopOnFocus: true,
        style: {
          background: type === "success" ? "#42ab49" : "#c63637",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
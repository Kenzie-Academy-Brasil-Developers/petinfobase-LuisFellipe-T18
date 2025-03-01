export function toast(message, color){
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          color: color,
          background: "#FFFFFF"
          
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
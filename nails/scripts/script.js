  (function () {
    emailjs.init("29z69TVmotMDoCVlM"); // Ваш Public Key (user_id)
  })();

  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = this;
    const messageBox = document.getElementById("formMessage");
    messageBox.textContent = "Отправка...";

    emailjs
      .sendForm("service_w5nxekl", "template_jhfq827", form)
      .then(function () {
        messageBox.textContent = "Сообщение успешно отправлено!";
        form.reset();
      })
      .catch(function (error) {
        messageBox.textContent = "Ошибка отправки: " + JSON.stringify(error);
      });
  });
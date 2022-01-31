async function requestFormHandler(event) {
  console.log("AAAAAAAAGGGGGGGHHHHHHHHHHH");
  event.preventDefault();

  const name = document.querySelector("#username-request").value.trim();
  const property_id = document.querySelector("#property-request").value.trim();
  const email = document.querySelector("#email-request").value.trim();
  const request_message = document
    .querySelector("#message-request")
    .value.trim();
  const request_type_id = document.querySelector(
    'input[name="type-request"]:checked'
  ).value;
  // default to a "reported" status type
  const status_type_id = 1;
  const work_order_type_id = 1;

  if (name && request_message) {
    const response = await fetch("/api/requests", {
      method: "post",
      body: JSON.stringify({
        name,
        property_id,
        email,
        request_message,
        request_type_id,
        status_type_id,
        work_order_type_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".request-form")
  .addEventListener("submit", requestFormHandler);

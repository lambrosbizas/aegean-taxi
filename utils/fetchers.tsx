export const tokenFetcher = () =>
  fetch("https://carky-api.azurewebsites.net/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=password&username=webapp@aegeantaxi.com&password=AegeanT@xi`,
  })
    .then((r) => r.json())
    .then((data) => {
      return data;
    });

export const sendSms0 = (
  apiToken: string,
  phoneNumbers: Array<string>,
  message: string
) =>
  fetch(
    `https://carky-api.azurewebsites.net/api/AdminDashboard/Clients/SendBulkSMSNotification`,
    {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${apiToken}`,
        "content-type": "application/x-www-form-urlencoded",
      }),
      body: `PhoneNumbersArray=${phoneNumbers}&From=Aegean Taxi&Message=${message}`,
    }
  ).then((r) => r);

export async function sendSms(phoneNumbers: string, message: string) {
  console.log("phoneNumbers", phoneNumbers, "message", message);
  const data: any = {
    message: message,
    phone: phoneNumbers,
  };

  await fetch("https://aegean-service.vercel.app/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

// fetch("https://dashboard.nexmo.com/getting-started/api/demo/sms", {
//   headers: {
//     accept: "application/json",
//     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,haw;q=0.7,el;q=0.6",
//     "content-type": "application/json",
//     "csrf-token": "6qKj9EQH-wu4xIY0rVlkSAX8ZypdqKaK5n64",
//     "sec-ch-ua":
//       '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": '"macOS"',
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-csrf-token": "a4e48bb4-5554-47c4-a889-771cdd9ca2ef",
//     "x-tracking-request-id": "9e9ed3fd-1d40-43b3-82bf-078969a15bd5",
//     "x-tracking-session-id": "80a8511e-bab6-41ba-93ce-de959ea4e807",
//     "x-xsrf-token": "a4e48bb4-5554-47c4-a889-771cdd9ca2ef",
//   },
//   referrer: "https://dashboard.nexmo.com/getting-started/sms",
//   referrerPolicy: "strict-origin-when-cross-origin",
//   body: '{"from":"Vonage APIs","message":"Hello from Vonage SMS API"}',
//   method: "POST",
//   mode: "cors",
//   credentials: "include",
// });

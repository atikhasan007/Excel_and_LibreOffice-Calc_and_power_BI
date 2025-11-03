function onFormSubmit(e) {
  const [timestamp, email, name, phone, rating] = e.values;

  const url = "https://ylaprmvqmcdkzzyuxdqx.supabase.co/rest/v1/feedbackresponse";
  const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsYXBybXZxbWNka3p6eXV4ZHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwNjc2NTEsImV4cCI6MjA3NzY0MzY1MX0.vKbK1yWtslmoqyP-wktXSuYabKKz_rxLjgxODJGKHCQ";

  const options = {
    method: "POST",
    contentType: "application/json",
    headers: {
      apikey: apikey,
      Authorization: `Bearer ${apikey}`
    },
    payload: JSON.stringify({
      timestamp: timestamp,
      email: email,
      name: name,
      phone: phone,
      rating: parseInt(rating)
    }),
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    Logger.log("Response: " + response.getContentText());
  } catch (err) {
    Logger.log("Supabase Error: " + err);
  }
}

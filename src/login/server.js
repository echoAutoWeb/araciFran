import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://aninbahxvbjadcxgpxej.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuaW5iYWh4dmJqYWRjeGdweGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxMTcxMjMsImV4cCI6MjAwOTY5MzEyM30.qTAhjpYNJZWlaTnr9JFKvJA8wpou8DLoW9q0B4929u4"
);

// Authenticate a user
async function login(email, password) {
  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  });
  if (error) {
    console.error("Error signing in:", error.message);
    return null;
  }
  return user;
}

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = await login(email, password);

  if (user) {
    // Authentication successful
    // Redirect the user to the content they should access
    window.location.href = "https://www.github.com";
  } else {
    alert("Login failed. Please check your credentials.");
  }
});

<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST['username'];
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

  $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
  if (mysqli_query($conn, $sql)) {
    echo "User registered successfully.";
  } else {
    echo "Error: " . mysqli_error($conn);
  }
}
?>
<!-- Simple form -->
<form method="POST">
  <input type="text" name="username" placeholder="Username" required><br>
  <input type="password" name="password" placeholder="Password" required><br>
  <button type="submit">Register</button>
</form>
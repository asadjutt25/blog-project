<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = "SELECT * FROM users WHERE username='$username'";
  $result = mysqli_query($conn, $sql);

  if ($row = mysqli_fetch_assoc($result)) {
    if (password_verify($password, $row['password'])) {
      echo "Login successful! Welcome " . $username;
    } else {
      echo "Wrong password.";
    }
  } else {
    echo "User not found.";
  }
}
?>
<!-- Simple form -->
<form method="POST">
  <input type="text" name="username" placeholder="Username" required><br>
  <input type="password" name="password" placeholder="Password" required><br>
  <button type="submit">Login</button>
</form>


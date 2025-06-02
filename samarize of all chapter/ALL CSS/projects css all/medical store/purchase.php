<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $product = $_POST['product'];
  $user_id = $_POST['user_id']; // Normally from session

  $sql = "INSERT INTO orders (product_name, user_id) VALUES ('$product', '$user_id')";
  if (mysqli_query($conn, $sql)) {
    echo "Purchase successful!";
  } else {
    echo "Error: " . mysqli_error($conn);
  }
}
?>
<!-- Simple form -->
<form method="POST">
  <input type="text" name="product" placeholder="Product Name" required><br>
  <input type="number" name="user_id" placeholder="User ID" required><br>
  <button type="submit">Purchase</button>
</form>\
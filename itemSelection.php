<?php include('auth2.php'); ?>

<!DOCTYPE HTML>
<html>
<head>
  <link rel = "stylesheet" href = "index.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src = "items.js"></script>
  <title>
    Item Selection
  </title>
</head>
<body>
  <h1 id='ice' style = "text-align: center;">ICE INSIGNIA</h1>
  <table class = "playerOneList">
    <tr>
      <td id='user1'>
        <?php echo $_SESSION['userName1']; ?>
      </td>
    </tr>
    <tr>
      <td>
        <div class = char id = "char1">
        </div>
      </td>
      <td>
        <div class = slot id = "char1_item">
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class = char id = "char2">
        </div>
      </td>
      <td>
        <div class = slot id = "char2_item">
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class = char id = "char3">
        </div>
      </td>
      <td>
        <div class = slot id = "char3_item">
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class = char id = "char4">
        </div>
      </td>
      <td>
        <div class = slot id = "char4_item">
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class = char id = "char5">
        </div>
      </td>
      <td>
        <div class = slot id = "char5_item">
        </div>
      </td>
    </tr>
  </table>

  <!--TABLE FOR THE SHOP-->

  <table class = "shop">
    <tr>
      <td style="color:#e50000;">
        <?php echo $_SESSION['userName1']; ?> Items
      </td>
      <td style="color:DodgerBlue;">
        <?php echo $_SESSION['userName2']; ?> Items
      </td>
    </tr>
    <tr>
      <td>
        <div class = item id = "book1">
          <img src = "Sprites/book.gif" title="Book +50 Intellect" alt="Book +50 Intellect"/>
        </div>
      </td>
      <td>
        <div class = item id = "book2">
          <img src = "Sprites/book.gif" title="Book +50 Intellect" alt="Book +50 Intellect"/>
        </div>
      </td>
    </tr>

    <tr>
      <td>
        <div class = item id = "mail1">
          <img src = "Sprites/chainmail.gif" title="Chainmail +45 Defense" alt="Chainmail +45 Defense"/>
        </div>
      </td>
      <td>
        <div class = item id = "mail2">
          <img src = "Sprites/chainmail.gif" title="Chainmail +45 Defense" alt="Chainmail +45 Defense"/>
        </div>
      </td>
    </tr>


    <tr>
      <td>
        <div class = item id = "egg1">
          <img src = "Sprites/egg.gif" title="Ring +30 Strength" alt="Ring +30 Strength"/>
        </div>
      </td>
      <td>
        <div class = item id = "egg2">
          <img src = "Sprites/egg.gif" title="Ring +30 Strength" alt="Ring +30 Strength"/>
        </div>
      </td>
    </tr>


    <tr>
      <td>
        <div class = item id = "pot1">
          <img src = "Sprites/HPpot.gif" title="Health Pot +60 HP" alt="Health Pot +60 HP"/>
        </div>
      </td>
      <td>
        <div class = item id = "pot2">
          <img src = "Sprites/HPpot.gif" title="Health Pot +60 HP" alt="Health Pot +60 HP"/>
        </div>
      </td>
    </tr>


    <tr>
      <td>
        <div class = item id = "boot1">
          <img src = "Sprites/boots.gif" title="Boots +1 Max Movement" alt="Boots +1 Max Movement"/>
        </div>
      </td>
      <td>
        <div class = item id = "boot2">
          <img src = "Sprites/boots.gif" title="Boots +1 Max Movement" alt="Boots +1 Max Movement"/>
        </div>
      </td>
    </tr>


    </table>




  <!--TABLE TWO FOR PLAYER TWO -->
  <table class = "playerTwoList">
    <tr>
      <td></td>
      <td id='user2'>
        <?php echo $_SESSION['userName2']; ?>
      </td>
    </tr>
    <tr>
      <td>
        <div class = slot id = "char1_item">
        </div>
      </td>
      <td>
        <div class = char id = "char1">
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class = slot id = "char2_item">
        </div>
      </td>
      <td>
        <div class = char id = "char2">
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class = slot id = "char3_item">
        </div>
      </td>
      <td>
        <div class = char id = "char3">
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class = slot id = "char4_item">
        </div>
      </td>
      <td>
        <div class = char id = "char4">
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class = slot id = "char5_item">
        </div>
      </td>
      <td>
        <div class = char id = "char5">
        </div>
      </td>
    </tr>
</table>

  <button id="submitButton">Submit</button>
   <button class="p2hov" href="destroy.php">Logout</button>



</body>

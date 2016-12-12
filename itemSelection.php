<?php include('auth2.php'); ?>

<!DOCTYPE HTML>
<html>
<head>
  <link rel = "stylesheet" href = "loginPage/index.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src = "items.js"></script>
  <title>
    Item Selection
  </title>
</head>
<body>
  <p style = "text-align: center;">ICE INSIGNIA</P>
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
          <img src = "sprites/book.gif" title="Book +1 Range" alt="Book +1 Range"/>
        </div>
      </td>
      <td>
        <div class = item id = "book2">
          <img src = "sprites/book.gif" title="Book +1 Range" alt="Book +1 Range"/>
        </div>
      </td>
    </tr>

    <tr>
      <td>
        <div class = item id = "mail1">
          <img src = "sprites/chainmail.gif" title="Chainmail +10 Defense" alt="Chainmail +10 Defense"/>
        </div>
      </td>
      <td>
        <div class = item id = "mail2">
          <img src = "sprites/chainmail.gif" title="Chainmail +10 Defense" alt="Chainmail +10 Defense"/>
        </div>
      </td>
    </tr>


    <tr>
      <td>
        <div class = item id = "egg1">
          <img src = "sprites/egg.gif" title="Egg +10 Attack" alt="Egg +10 Attack"/>
        </div>
      </td>
      <td>
        <div class = item id = "egg2">
          <img src = "sprites/egg.gif" title="Egg +10 Attack" alt="Egg +10 Attack"/>
        </div>
      </td>
    </tr>


    <tr>
      <td>
        <div class = item id = "pot1">
          <img src = "sprites/HPpot.gif" title="Health Pot +10 HP" alt="Health Pot +10 HP"/>
        </div>
      </td>
      <td>
        <div class = item id = "pot2">
          <img src = "sprites/HPpot.gif" title="Health Pot +10 HP" alt="Health Pot +10 HP"/>
        </div>
      </td>
    </tr>


    <tr>
      <td>
        <div class = item id = "boot1">
          <img src = "sprites/boots.gif" title="Boots +1 Move" alt="Boots +1 Move"/>
        </div>
      </td>
      <td>
        <div class = item id = "boot2">
          <img src = "sprites/boots.gif" title="Boots +1 Move" alt="Boots +1 Move"/>
        </div>
      </td>
    </tr>


    </table>




  <!--TABLE TWO FOR PLAYER TWO -->
  <table class = "playerTwoList">
    <tr>
      <td></td>
      <td></td>
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
  <a class="p2hov" href="destroy.php">Logout</a>



</body>

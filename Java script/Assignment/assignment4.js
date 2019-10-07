document.getElementById('list').innerHTML =`
<ol type="A">
<li>Cars
    <ul>
        <li>Porsche</li>
        <li>Ferari</li>
        <li>BMW</li>
    </ul>
</li>
<li>Bike</li>
<li>Truck</li>
</ol>
<ul>
    <li>Pollution
        <ol type="1">
            <li>Air Pollution</li>
            <li>Water Pollution</li>
            <li>Noise Pollution</li>
            <li> Soil Pollution </li>
        </ol>
    </li>
    <li>Deforestation</li>
    <li>Carbon Emission</li>
</ul>`;
document.getElementById('division').innerHTML =`
<p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>`;
document.getElementById('form').innerHTML =`
<legend> 
<label for="username">Name</label>
        <input autofocus type="text" id="username" name="username" required minlength="5" maxlength="10"><br><br>
        <label for="password" >Age</label>
        <input type="text" id="password" name="password"><br><br>
        <label for="des" id="add">Address</label><br><br>
        <textarea name="description" id="des" cols="30" rows="5"></textarea><br><br>
        
        <label for="" id="dob">DOB</label>
    <input type="date" id="date"><br><br>
    <label for="">Gender:</label>
    <input type="radio" name="gender">Male
    <input type="radio" name="gender">Female <br><br>
    <label for="">E-Mail:</label>
    <input type="email" id="mail">
    </legend>`;

    document.getElementById('div').innerHTML =`
<p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>`;
  
  
  document.getElementById('table').innerHTML =`

  <table border ="1">
  <tr>
      <th> Name </th>
      <th>Age</th>
      <th>Address</th>
      <th>E-mail</th>
      <th>DOB</th>
      <th>Gender</th>
  </tr>
  <tr>
      <td>Alex</td>
      <td>24</td>
      <td>California</td>
      <td>alex556@gmail.com</td>
      <td>09/09/1994</td>
      <td>Male</td>
  </tr>
  <tr>
      <td>Maria</td>
      <td>21</td>
      <td>New Jersey</td>
      <td>ima_ria@rediffmail.com</td>
      <td>20/11/1998</td>
      <td>Female</td>
  </tr>
  <tr>
  <td>Brendon</td>
  <td>49</td>
  <td>Texas</td>
  <td>bren9089@gmail.com</td>
  <td>01/05/1970</td>
  <td>Male</td>
  </tr>
</table>  `;









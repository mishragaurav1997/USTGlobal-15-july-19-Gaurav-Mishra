<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" session="false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Register Page</title>
</head>
<body>
	<form action="./register" method="post">
		<table>
			<tr>
				<td>Name:</td>
				<td><input type="text" name="name" required="required"></td>
			</tr>
			<tr>
				<td>DOB:</td>
				<td><input type="date" name="dob"></td>
			</tr>
			<tr>
				<td>Email:</td>
				<td><input type="email" name="email" required="required"></td>
			</tr>
			<tr>
				<td>Password:</td>
				<td><input type="password" name="password" required="required"></td>
			</tr>
			<tr>
				<td><input type="submit"></td>
			</tr>

		</table>
	</form>

</body>
</html>
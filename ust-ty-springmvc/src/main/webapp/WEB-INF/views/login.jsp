<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" session="false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login Page</title>
</head>
<body>
	<form action="./login" method="post">
		<table>
			<tr>
				<td>Email:</td>
				<td><input type="email" name="email" required="required"></td>
			</tr>
			<tr>
				<td>Password:</td>
				<td><input type="password" name="password" required="required"></td>
			</tr>
			<tr>
				<td><input type="submit" value="Sign In"></td>
			</tr>
		</table>
	</form>
	<br/>
	<br/>
	<button><a href="./register">Sign Up</a></button>
	<h2> ${msg}</h2> 
</body>
</html>
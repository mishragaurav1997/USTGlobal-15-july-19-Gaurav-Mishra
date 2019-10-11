<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<jsp:useBean id="bean"
	class="com.ustglobal.mywebapp.dto.EmployeeInfoBean" scope="session" ></jsp:useBean>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>
		Welcome<%=bean.getEmpName()%></h1>
	<div align="right">
		<a href="./delete?id= <%=bean.getEmpId()%>">Click Here To Delete
			Profile</a>
	</div>
	<div align="right">
		<a href="./logout">LogOut</a>
	</div>
</body>
</html>
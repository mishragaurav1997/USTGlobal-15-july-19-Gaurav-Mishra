<!-- declaration -->
<%@page import="java.util.Date"%>
<%! private int count = 100;%>
<%!
  public void jspInit() {
	System.out.println("init");
}
   public void jspDestroy(){
	   System.out.println("Destroy");
   }
%>
<% Date date = new Date(); %>
<% int count = 0;%>
<html>
<body>
	<h1>Hello World!</h1>
	<h2>Count Value = <%= count %></h2>
	<h3><%=date %></h3>
</body>
</html>

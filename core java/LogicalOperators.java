public class LogicalOperators{
	public static void main (String args[]){
		boolean b = true;
		boolean c = false;
		 boolean d = b&&c;
		 System.out.println("For && "+d);
		 
		 d = b||c;
		 System.out.println("FOr || "+d);
		 
		 d = !(b||c);
		 System.out.println("For !  "+d);
		  
		  byte i = 2,j = 3;
		  int k = i|j;
		  int l = 5^1;
		  System.out.println("For & bitwise opr."+k);
		  System.out.println("For & bitwise opr."+l);
	}
}

public class IncrementOperators{
	public static void main (String args[]){
		int i = 10;
		 int j = i++;
		System.out.println("For post increment =" +j);
		j = ++i;
		System.out.println("For pre increment ="+j);
		
		int a = 10;
		 int b = a--;
		System.out.println("For post decrement ="+b);
		b = --a;
		System.out.println("For pre decrement ="+b);
	}
}

		
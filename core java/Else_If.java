public class Else_If{
	public static void main(String args[]){
		/*int i = 10;
		int j = 20;
		if(i<j){
			System.out.println("if block is working");
		}
		else if(i<j){
			System.out.println("else-if block is working");
		}
		else{
			System.out.println("Else block is working");
		}
	System.out.println("outside of if, else-if,else block");*/
	
	int marks = 74;
	if (marks > 100 || marks < 0){
		System.out.println("Invalid Marks");
	}
	else if ( marks <= 100 && marks >=91){
	System.out.println("Grade is A");
	}
	else if ( marks <= 90 && marks >=81){
	System.out.println("Grade is B");
	}
	else if ( marks <= 80 && marks >=71){
	System.out.println("Grade is C");
	}
	else if ( marks <= 70 && marks >=61){
	System.out.println("Grade is D");
	}
	else if ( marks <= 60 && marks >=51){
	System.out.println("Grade is E");
	}
	else if ( marks <= 50 && marks >=41){
	System.out.println("Retest");
	}
	else{
	 System.out.println("Fail");
	}
	}
}
			
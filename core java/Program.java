 public class Program{
	public static void main(String args[]){
		int day = 7;
		switch (day){
		
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			System.out.println("Weekdays");
		      break;
			case 6:
			case 7:
				System.out.println("Weekends");
		      break;
		default:
		System.out.println("Invalid Day"); 
		break;
		}
		if(day <=5){
			System.out.println("name");
		}
		else{
			for(int i =0;i<=4;i++)
			{
				System.out.println("name");
			}
		}
		
	}
}
		
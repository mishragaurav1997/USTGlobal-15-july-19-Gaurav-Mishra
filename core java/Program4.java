public class Program4{
	public static void main(String args[]){
		int j2 = 5;
		int j3 = 8;
for(int i=1;i<=4;i++)
		{
			for(int j=1;j<=i;j++)
			{
				if(j==1){
					System.out.print(i);
					System.out.print(" ");
				}
				else if(j==2){
				System.out.print(j2);
				System.out.print(" ");
				j2++;
				}
				else if(j==3){
				System.out.print(j3);
				System.out.print(" ");
				j3++;
				}
				else{
				System.out.print(j3);
				System.out.print(" ");
				}
			}
			System.out.println( );
		}

	}
	
}
				
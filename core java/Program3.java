public class Program3{
	public static void main(String args[]){
int count =1;
for(int i =0;i<3;i++)
		{
			for(int j=1;j>=i;j--)
			{
				System.out.print(" ");
			}
			
			for(int k=1;k<=2*i+1;k++)
			{
					System.out.print("*");
			}
			System.out.println( );
		}
for(int x =1;x<3;x++)
		{
			for(int y=0;y<x;y++)
			{
				System.out.print(" ");
			}
			for(int z=1;z<=2*(3-x)-1;z++)
			{
					System.out.print("*");
					 count++;
			}
			System.out.println( );
		}

	}
}
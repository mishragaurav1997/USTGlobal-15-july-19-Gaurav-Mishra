public class MethodExample1{
	public static float calcCircle(float a){
	
	float c = 3.14*a*a;
return c;
	}
	public static float calcTriangle(float b,float c){
		
		float d = 0.5*c*b;
		return d;
	}
	public static float calcAvg(float i,float j, float k){
		
		float e = (i+j+k)/3;
		return e;
	}
	public static void main (String []args){
double x = calcCircle(10);
double y = calcTriangle(2,5);
float z = calcAvg(1,2,3);
System.out.println(x);
System.out.println(y);
System.out.println(z);
	}
}	
	
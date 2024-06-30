import { login } from "./actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./LoginForm";

export default function LoginPage() {

  return (
    <main className="container mx-auto px-4">
      <div className="min-h-screen flex justify-center items-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <LoginForm login={login} />
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      </div>
    </main>
  );
}

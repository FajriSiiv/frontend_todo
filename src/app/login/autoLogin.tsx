import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { userLogin } from "../../../data/user";

export function AutoLoginUser() {
  const { toast } = useToast();
  const router = useRouter();

  const checkLogin = (usernameInput: string, passwordInput: string) => {
    const matchedUser = userLogin.find(
      (user: any) => user.username === usernameInput
    );

    if (matchedUser?.password === passwordInput) {
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("username", usernameInput);
      localStorage.setItem("userId", matchedUser.userId.toString());

      toast({
        title: "Login succesfully",
        description: "Thank you for visiting my website",
        style: {
          background: "#80ed99",
        },
      });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      router.push("/login");
      toast({
        title: "Login Failed",
        description: "Check your password or username",
        style: {
          background: "#ef233c",
          color: "#ffffff",
        },
      });
    }
  };

  const handleAutoLogin = (username: any, password: any) => {
    checkLogin(username, password);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex gap-2">
          <User />
          User
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Auto Login</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-10 mt-10">
          {userLogin.slice(0, 7).map((user) => (
            <div className="flex items-center gap-2 justify-between">
              <div className="flex items-center gap-5">
                <Label htmlFor="name" className="flex flex-col gap-y-2 ">
                  Username : <span>{user.username}</span>
                </Label>
                <Label htmlFor="username" className="flex flex-col gap-y-2 ">
                  Password : <span>{user.password}</span>
                </Label>
              </div>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleAutoLogin(user.username, user.password);
                }}
              >
                Login
              </Button>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

import "dart:io";

void main() {
  print("Simple Dart App");

  stdout.write("Your name: ");
  String name = stdin.readLineSync() ?? "Guest";

  stdout.write("Your age: ");
  String ageInput = stdin.readLineSync() ?? "";
  int age = int.tryParse(ageInput) ?? 0;

  stdout.write("Are you a student? (y/n): ");
  String studentInput = (stdin.readLineSync() ?? "").toLowerCase();
  bool isStudent = studentInput == "y" || studentInput == "yes";

  String status = isStudent ? "student" : "not a student";
  print("Hello, $name! You are $age years old and you are $status.");

  int sum = add(7, 5);
  print("7 + 5 = $sum");

  List<String> tasks = ["Read", "Code", "Sleep"];
  print("Tasks:");
  for (int i = 0; i < tasks.length; i++) {
    print("- ${tasks[i]}");
  }
}

int add(int a, int b) {
  return a + b;
}

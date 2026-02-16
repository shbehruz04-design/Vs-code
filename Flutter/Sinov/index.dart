import "package:flutter/material.dart";

void main() {
  runApp(const SinovApp());
}

class SinovApp extends StatelessWidget {
  const SinovApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Sinov App",
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.teal),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _ageController = TextEditingController();

  bool _isStudent = false;
  String _result = "Natija shu yerda chiqadi";

  final List<String> _tasks = <String>["Read", "Code", "Sleep"];

  @override
  void dispose() {
    _nameController.dispose();
    _ageController.dispose();
    super.dispose();
  }

  void _showResult() {
    final String name = _nameController.text.trim().isEmpty
        ? "Guest"
        : _nameController.text.trim();
    final int age = int.tryParse(_ageController.text.trim()) ?? 0;
    final String status = _isStudent ? "student" : "not a student";
    final int sum = add(7, 5);

    setState(() {
      _result = "Hello, $name! You are $age years old and you are $status.\n"
          "7 + 5 = $sum";
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Simple Flutter App"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            TextField(
              controller: _nameController,
              decoration: const InputDecoration(
                labelText: "Your name",
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _ageController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: "Your age",
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 8),
            SwitchListTile(
              contentPadding: EdgeInsets.zero,
              title: const Text("Are you a student?"),
              value: _isStudent,
              onChanged: (bool value) {
                setState(() {
                  _isStudent = value;
                });
              },
            ),
            const SizedBox(height: 8),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: _showResult,
                child: const Text("Show Result"),
              ),
            ),
            const SizedBox(height: 16),
            Text(
              _result,
              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w500),
            ),
            const SizedBox(height: 16),
            const Text(
              "Tasks:",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            ..._tasks.map((String task) => Text("- $task")),
          ],
        ),
      ),
    );
  }
}

int add(int a, int b) {
  return a + b;
}

package com.example;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import org.bson.Document;
import org.bson.conversions.Bson;

import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        String uri = System.getenv("MONGODB_URI");

        if (uri == null || uri.isBlank()) {
            System.out.println("Please set MONGODB_URI first.");
            return;
        }

        try (MongoClient client = MongoClients.create(uri);
             Scanner scanner = new Scanner(System.in)) {
            MongoDatabase database = client.getDatabase("college");
            MongoCollection<Document> students = database.getCollection("students");

            database.runCommand(new Document("ping", 1));
            System.out.println("MongoDB connected successfully!");

            while (true) {
                System.out.println("\n--- Student Menu ---");
                System.out.println("1. Add Student");
                System.out.println("2. View All Students");
                System.out.println("3. Search by ID");
                System.out.println("4. Search by Department");
                System.out.println("5. Search by CGPA");
                System.out.println("6. Search by Skill");
                System.out.println("7. Exit");
                System.out.print("Enter choice: ");

                if (!scanner.hasNextInt()) {
                    System.out.println("Invalid choice!");
                    scanner.nextLine();
                    continue;
                }

                int choice = scanner.nextInt();
                scanner.nextLine();

                switch (choice) {
                    case 1:
                        addStudent(students, scanner);
                        break;
                    case 2:
                        showStudents(students, new Document());
                        break;
                    case 3:
                        System.out.print("Enter student ID: ");
                        showStudents(students,
                                Filters.eq("studentId", scanner.nextLine()));
                        break;
                    case 4:
                        System.out.print("Enter department: ");
                        showStudents(students,
                                Filters.eq("department", scanner.nextLine()));
                        break;
                    case 5:
                        System.out.print("Enter minimum CGPA: ");
                        if (!scanner.hasNextDouble()) {
                            System.out.println("Invalid CGPA!");
                            scanner.nextLine();
                            break;
                        }
                        double cgpa = scanner.nextDouble();
                        scanner.nextLine();
                        showStudents(students, Filters.gte("cgpa", cgpa));
                        break;
                    case 6:
                        System.out.print("Enter skill: ");
                        showStudents(students, Filters.eq("skills", scanner.nextLine()));
                        break;
                    case 7:
                        System.out.println("Exiting program...");
                        return;
                    default:
                        System.out.println("Invalid choice!");
                }
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    private static void addStudent(
            MongoCollection<Document> students, Scanner scanner) {
        System.out.print("Enter student name: ");
        String name = scanner.nextLine();

        System.out.print("Enter age: ");
        if (!scanner.hasNextInt()) {
            System.out.println("Age must be a number!");
            scanner.nextLine();
            return;
        }
        int age = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Enter course: ");
        String course = scanner.nextLine();

        Document student = new Document("name", name)
                .append("age", age)
                .append("course", course);

        students.insertOne(student);
        System.out.println("Student added successfully!");
    }

    private static void showStudents(
            MongoCollection<Document> students, Bson filter) {
        boolean found = false;

        for (Document student : students.find(filter)) {
            System.out.println(student.toJson());
            found = true;
        }

        if (!found) {
            System.out.println("No matching students found.");
        }
    }
}
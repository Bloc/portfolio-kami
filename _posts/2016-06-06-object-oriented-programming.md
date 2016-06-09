---
layout: post
title: Object Oriented Programming
feature-img: "img/sample_feature_img.png"
---

## Object Oriented Programming - Ruby
When I first heard object oriented programming or OOP I didn't really understand it. After a few tutorials I didn't understand it. I still don't like calling it OOP. In ruby, OOP basically means class instances. Or, a real version of an idea.

When someone says to create a class in ruby, they are really saying, describe the idea of what something is. Usually it is about items in the real world. For example, If I didn't know anything, and I asked you to tell me what a teacher is, you would say...

A teacher is a person that teaches students about many subjects. Teachers have names, have a classroom, have authority over students, and have a number of years worked. Some teachers have tenure.

If I ask you what the teachers name was you would say *I'm not talking about an actual teacher, just teachers in general* Boom. You just created a class in ruby.

```
class Teacher
      attr_accessor :name, :years_worked, :tenure? :classroom

end
```
So you defined a class, or the idea of teachers, but you haven't created a real teacher. An "instance" of a teacher, or an object.

`teacher = Teacher.new("Mrs.Green")`

teacher in this case is the object that we can send around to different areas of the program. You couldn't send the idea of a teacher to a new classroom, but you could send Mrs. Green to a new classroom.

`classroom = Classroom.new(room: 12, teacher: "Mrs. Green")`
`teacher.classroom`
`> 12`

You could take this farther and farther. Teacher is really just a type of person. So we could define a person class and then have a teacher inherit that description, and then fine-tune what makes a teacher a teacher and a student a student. Every time you describe something "speaking in general", it's a class. So a classroom and a student are going to be classes too.

```
class Person
  def is_a_human?
    true
  end
end

class Teacher < Person
end

#variable from above
teacher.is_a_human?
>true
```

So, Object Oriented Programming is simply describing ideas(classes), and creating objects(class instances) of those ideas. Technically, even a class is an object in ruby, but that is more than I care to even think about right now so I couldn't even explain it.

Not sure if this article can even reach anyone out there, and I'm really just typing this stuff out to explain it for myself. If you are lucky enough to read it, I hope it helped.

See ya later.

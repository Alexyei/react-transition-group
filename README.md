#react-transition-group

[Документация](http://reactcommunity.org/react-transition-group/transition)
[GitHub](https://github.com/reactjs/react-transition-group)

## Transition и CSSTransition

Компоненты Transition и CSSTransition позволяют описать переход от одного состояние дочернего компонента к другому с течением времени с помощью простого декларативного API.
Чаще всего они используются для анимации монтажа и демонтажа компонента, но также может использоваться для описания переходных состояний на месте.

Они принимают единственный дочерний элемент, и устанавливают для него стили состояния.
Компонент Transition задаёт стили напрямую через атрибут style.
Компонент CSSTransition задаёт стили с помощью классов через атрибут classNames.

Существует 6 основных состояний перехода CSSTransition (есть ешё appear но здесь не рассматривается )
1. enter
2. entering
3. entered
4. exit
5. exiting
6. exited

Переключение состояния перехода осуществляется через props in. Также используется props timeout.
Возможные сценарии переключения состояния:
1. дефолтный in: false. => Ребёнок внутри Transition (или CSSTransition) не смонтирован.
1.1 Переключение с false на true. => enter => монитрование компонента => entering => (через timeout) => entered
2. дефолтный in: true. => Ребёнок внутри Transition (или CSSTransition) смонтирован, если свойство mountOnEnter == true.
2.1 Переключение с true на false. => exit => перемонтирование компонента (???) => exiting => (через timeout) => exited => компонент (ребёнок) размонитруется, если unmountOnExit == true.

Timeout используется только при переходе из entering => entered и exiting => exited
Стили компонента задаются через CSS классы (CSSTransition)

У Transition тоже 6 состояний, но стили можно добавлять только к 4. (к enter и exit нельзя). Transition пременяют там где не возможно создать классы для динамических стилей (FanList например).
Поэтому цепочки выглядят немного по другому:
1. дефолтный in: false. => Ребёнок внутри Transition (или CSSTransition) не смонтирован.
1.1 Переключение с false на true. => **exited** => монитрование компонента => entering => (через timeout) => entered
2. дефолтный in: true. => Ребёнок внутри Transition (или CSSTransition) смонтирован, если свойство mountOnEnter == true.
2.1 Переключение с true на false. => **entered** => перемонтирование компонента (???) => exiting => (через timeout) => exited => компонент (ребёнок) размонитруется, если unmountOnExit == true.


Поэтому цепочки выглядят так:
```CSS

@keyframes fade-in {
  0%{

    transform: translateX(-150px);
  }
  100%{

    transform: translateX(0px);
  }
}


@keyframes fade-out {
  0%{
    opacity: 1;
    transform: translateX(0);
  }
  100%{
    opacity: 0;
    transform: translateX(150px);
  }
}

button.enter{
    animation: fade-in 500ms forwards;
}
button.entering{
}
button.exiting{
}
button.exit{
    animation: fade-out 500ms forwards;
}
```
альтернатива:
```CSS
button.enter__styles{
    opacity: 0;
    transform: translateX(-150%);
}
button.entering__styles{
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms, transform 500ms;
}
button.exiting__styles{
    opacity: 1;
    transform: translateX(0);
}
button.exit__styles{
    opacity: 0;
    transform: translateX(150px);
    transition: opacity 500ms, transform 500ms;
}
```
Неправильный вариант:
```CSS
button.enter{
    
}
button.entering{
    animation: fade-in 500ms forwards;
}
button.exiting{
    animation: fade-out 500ms forwards;
}
button.exit{
    
}
```

Третий вариант неправильный, так как: к нопке применяются стили из enter => она монтируется => к кнопке применяются стили из entering => кнопка делает резкий скачок влево

## SwitchTransition
**CSSTransition используется для анимирования одного элемента.**
**SwitchTransition используется для замены одного элемента на другой.**
**TransitionGroup используется для добавления или удаления элементов из массива**

Его ребёнком является CSSTransition (или Transition)
Он выполняет переключение состояния CSSTransition (или Transition) через props key и mode
Свойство key может быть чем угодно, когда оно меняется переход срабатывает (согласно режиму mode).
У mode есть только 2 значения in-out и out-in.

По умолчанию ребёнок CSSTransition уже смонтирован.
1. mode == out-in. key changed => старый элемент удаляется => старый элемент переход exit => добавляется новый эелемент => новый элемент переход enter => финальное сотояние entered (новый элемент)
2. mode == in-out. key changed => добавляется новый эелемент => новый элемент переход enter => старый элемент удаляется => старый элемент переход exit => финальное сотояние entered (новый элемент)


### аналог timeout
пропс timeout можно заменить нас ледующий пропс addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}, который работает по CSS событию. Такой подход работает только если стили заданы свойствами а не через animation.

## TransitionGroup
При добавлении элемента в массив срабатывает цепочка ->enter -> entering -> entered (для CSSTransition)
При добавлении элемента в массив срабатывает цепочка ->exited -> entering -> entered (для Transition)
При удалении элемента в массив срабатывает цепочка ->exit -> exiting -> exited (для CSSTransition)
При удалении элемента в массив срабатывает цепочка ->entered -> exiting -> exited (для Transition)
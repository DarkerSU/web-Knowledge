## 事件冒泡和事件捕获

事件冒泡：从事件源朝父级一直到根元素（HTML）。当某个元素的某类型事件被触发时，那么它的父元素同类型的事件也会被触发，一直触发到根源上；从具体的元素到不确定的元素。
事件捕获：从根元素（HTML）到事件源，当某个元素的某类型事件被触发时，先触发根元素的同类型事件，朝子一级触发，一直触发到事件源。

## 事件委托

当给父元素添加事件监听器时，事件监听器会分析从子元素 **冒泡** 上来的事件，找到到底是哪个子元素的事件。
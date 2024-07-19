function updateTargetBox() {
    const tasks = document.querySelectorAll('.task');
    const completedTasks = document.querySelectorAll('.task.completed');
    const totalTasks = tasks.length;
    const completedCount = completedTasks.length;
    const targetBox = document.querySelector('#target-box');

    if (totalTasks === 0) {
        targetBox.textContent = '';
        return;
    }

    if (completedCount === 0) {
        targetBox.textContent = '';
        return;
    }

    if (completedCount === totalTasks) {
        targetBox.style.color = '#2b8a3e';
        targetBox.style.fontWeight = '600' ;
        targetBox.textContent = 'Congratulations you reached your goal! 🎉✨';
        
    } else if (completedCount > totalTasks / 2) {
        targetBox.style.color = '#e67700';
        targetBox.style.fontWeight = '500' ;
        targetBox.textContent = `(${completedCount}/${totalTasks}) You are very close to completing your goal. Don't give up! 🏹📌`;
    }
    
    else if (completedCount == totalTasks / 2) {
        targetBox.style.color = '#1864ab';
        targetBox.style.fontWeight = '500' ;
        targetBox.textContent = `(${completedCount}/${totalTasks}) You are halfway to your goal. Good effort!💪🏻`;
    }

    else {
        targetBox.style.color = '#343a40';
        targetBox.style.fontWeight = '500' ;
        targetBox.textContent = `(${completedCount}/${totalTasks}) 
You still have a long way to go, keep working.📝📌`;
    }
}

// İlk başta hedef kutusunu güncelle
updateTargetBox();

document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a task");
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="delete-icon fa-solid fa-delete-left"></i>
            </button>
        </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");

        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
                updateTargetBox();
            };
        }

        let tasks = document.querySelectorAll(".task");
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
                updateTargetBox();
            };
        }

        document.querySelector('#newtask input').value = "";
        updateTargetBox();
    }
};

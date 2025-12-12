// Dynamic List
        const itemInput = document.getElementById('item-input');
        const addItemBtn = document.getElementById('add-item');
        const itemList = document.getElementById('item-list');

        addItemBtn.addEventListener('click', () => {
            const itemText = itemInput.value.trim();
            if (itemText) {
                const li = document.createElement('li');
                li.textContent = itemText;

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Hapus';
                deleteBtn.addEventListener('click', () => {
                    li.style.transition = 'all 0.3s ease';
                    li.style.transform = 'translateX(100%) rotateY(90deg)';
                    li.style.opacity = '0';
                    setTimeout(() => {
                        if (li.parentNode) {
                            itemList.removeChild(li);
                        }
                    }, 300);
                });

                li.appendChild(deleteBtn);
                itemList.appendChild(li);
                itemInput.value = '';
            }
        });

        // Change Background
        const redBtn = document.getElementById('red-bg');
        const greenBtn = document.getElementById('green-bg');
        const blueBtn = document.getElementById('blue-bg');

        redBtn.addEventListener('click', () => {
            document.body.style.background = 'linear-gradient(135deg, #e74c3c 0%,rgb(105, 16, 6) 100%)';
        });

        greenBtn.addEventListener('click', () => {
            document.body.style.background = 'linear-gradient(135deg, #27ae60 0%,rgb(4, 73, 33) 100%)';
        });

        blueBtn.addEventListener('click', () => {
            document.body.style.background = 'linear-gradient(135deg, #3498db 0%,rgb(8, 50, 78) 100%)';
        });

        // Counter
        const counter = document.getElementById('counter');
        const incrementBtn = document.getElementById('increment');
        const decrementBtn = document.getElementById('decrement');
        const resetBtn = document.getElementById('reset');

        let count = 0;

        incrementBtn.addEventListener('click', () => {
            count++;
            counter.textContent = count;
            counter.style.transform = 'scale(1.2) rotateX(10deg)';
            setTimeout(() => {
                counter.style.transform = 'scale(1) rotateX(0deg)';
            }, 200);
        });

        decrementBtn.addEventListener('click', () => {
            count--;
            counter.textContent = count;
            counter.style.transform = 'scale(1.2) rotateX(-10deg)';
            setTimeout(() => {
                counter.style.transform = 'scale(1) rotateX(0deg)';
            }, 200);
        });

        resetBtn.addEventListener('click', () => {
            count = 0;
            counter.textContent = count;
            counter.style.transform = 'scale(1.5) rotateY(360deg)';
            setTimeout(() => {
                counter.style.transform = 'scale(1) rotateY(0deg)';
            }, 500);
        });

        // Toggle Show/Hide
        const toggleBtn = document.getElementById('toggle-btn');
        const togglePara = document.getElementById('toggle-para');

        toggleBtn.addEventListener('click', () => {
            if (togglePara.style.display === 'none' || togglePara.style.display === '') {
                togglePara.style.display = 'block';
                toggleBtn.textContent = 'Sembunyikan';
                togglePara.style.transform = 'translateY(20px) rotateX(-10deg)';
                togglePara.style.opacity = '0';
                setTimeout(() => {
                    togglePara.style.transform = 'translateY(0) rotateX(0deg)';
                    togglePara.style.opacity = '1';
                }, 10);
            } else {
                togglePara.style.transform = 'translateY(-20px) rotateX(10deg)';
                togglePara.style.opacity = '0';
                setTimeout(() => {
                    togglePara.style.display = 'none';
                    toggleBtn.textContent = 'Tampilkan';
                }, 300);
            }
        });
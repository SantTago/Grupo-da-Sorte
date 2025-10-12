
 
        document.addEventListener('DOMContentLoaded', (event) => {
            const adminButton = document.getElementById('adminButton');
            const modal = document.getElementById('passwordModal');
            const closeModalBtn = document.getElementById('closeModalBtn'); // Novo ID para o botão de fechar
            const passwordInput = document.getElementById('passwordInput');
            const submitPassword = document.getElementById('submitPassword'); // Novo ID para o botão de entrar
            const feedback = document.getElementById('feedback');
            const navTabs = document.querySelectorAll('.nav-tab');

            // =======================================================
            // *** 1. COLOQUE A SENHA DE ADMINISTRAÇÃO AQUI ***
            const CORRECT_PASSWORD = '8107'; 
            
            // *** 2. COLOQUE O DIRETÓRIO DA PRÓXIMA PÁGINA AQUI ***
            const ADMIN_PAGE_URL = 'Sorteio.html'; 
            // =======================================================

            // ----------------------------------------------------
            // Funções de Navegação de Abas (Corrigidas)
            // ----------------------------------------------------
            function showSection(sectionId) {
                // Remove 'active' de todas as seções
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });
                // Remove 'active' de todas as abas
                navTabs.forEach(tab => {
                    tab.classList.remove('active');
                });

                // Adiciona 'active' à seção e à aba clicada
                document.getElementById(sectionId).classList.add('active');
                document.querySelector(`.nav-tab[data-target="${sectionId}"]`).classList.add('active');
            }

            // Adiciona evento de clique a todos os botões de navegação
            navTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    showSection(tab.dataset.target);
                });
            });

            // Garante que a seção "semanal" (padrão) seja exibida ao carregar
            showSection('semanal');


            // ----------------------------------------------------
            // Funções do Modal de Senha (Corrigidas)
            // ----------------------------------------------------
            
            // Abre o Modal
            adminButton.addEventListener('click', () => {
                modal.style.display = 'flex';
                passwordInput.value = '';
                feedback.textContent = '';
                passwordInput.focus(); // Foca no input
            });

            // Fecha o Modal
            closeModalBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            
            // Fecha o modal ao clicar fora dele
            window.addEventListener('click', (event) => {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            });

            function checkPassword() {
                const enteredPassword = passwordInput.value;

                if (enteredPassword === CORRECT_PASSWORD) {
                    feedback.textContent = 'Acesso liberado! Redirecionando...';
                    feedback.style.color = '#25d366';
                    
                    // --- REDIRECIONAMENTO DE SUCESSO ---
                    setTimeout(() => {
                        window.location.href = ADMIN_PAGE_URL;
                    }, 500);
                    // ------------------------------------
                    
                } else {
                    feedback.textContent = 'Senha incorreta. Tente novamente.';
                    feedback.style.color = '#d32f2f';
                    passwordInput.value = ''; // Limpa a senha incorreta
                    passwordInput.focus();
                }
            }
            
            // Adiciona evento de clique ao botão "Entrar"
            submitPassword.addEventListener('click', checkPassword);

            // Adiciona evento de tecla "Enter" ao campo de senha
            passwordInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    checkPassword();
                }
            });
        });

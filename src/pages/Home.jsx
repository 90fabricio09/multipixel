import React, { useState, useEffect } from 'react';
import '../css/home.css';
import Logo from '../assets/MPX_Logo_Yellow.svg';
import ContentImage from '../assets/Content_image.png';
import Cliente1 from '../assets/clientes/cliente1.png';
import Cliente2 from '../assets/clientes/cliente2.png';
import Cliente3 from '../assets/clientes/cliente3.png';
import Cliente4 from '../assets/clientes/cliente4.png';
import Cliente5 from '../assets/clientes/cliente5.png';
import Cliente6 from '../assets/clientes/cliente6.png';
import Cliente7 from '../assets/clientes/cliente7.png';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [centerText, setCenterText] = useState("Clique nos botões para descobrir mais sobre cada etapa");
    const [selectedStep, setSelectedStep] = useState(null);

    const toggleMenu = () => {
        const newMenuState = !isMenuOpen;
        setIsMenuOpen(newMenuState);
        
        // Adicionar/remover classe no body (sem bloquear scroll)
        if (newMenuState) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    };

    // Função para fechar menu
    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
    };

    // Fechar menu quando scrollar
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                closeMenu();
            }
        };

        const handleClick = (e) => {
            if (isMenuOpen && e.target.closest('.nav-link')) {
                closeMenu();
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClick);
        };
    }, [isMenuOpen]);

    // Limpar classe do body quando componente for desmontado
    useEffect(() => {
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, []);

    // Animação de scroll para imagens e textos
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Elementos para animar (apenas imagens e textos)
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        elementsToAnimate.forEach(el => observer.observe(el));

        return () => {
            elementsToAnimate.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="homepage">
            <div className="home">
                {/* Header/Navigation */}
                <header className="header">
                    <br>
                    <nav className="nav">
                        <div className="nav-logo">
                            <a href="/"><img src={Logo} alt="MultiPixel Logo" className="nav-logo-img" /></a>
                        </div>

                        {/* Hamburger Menu Button */}
                        <div className="hamburger" onClick={toggleMenu}>
                            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                        </div>

                        <div className={`nav-right ${isMenuOpen ? 'open' : ''}`}>
                            <div className="nav-links">
                                <a href="#" className="nav-link" onClick={closeMenu}>Início</a>
                                <a href="#sobre" className="nav-link" onClick={closeMenu}>Sobre</a>
                                <a href="#servicos" className="nav-link" onClick={closeMenu}>Serviços</a>
                                <a href="#pixel" className="nav-link" onClick={closeMenu}>Metodologia</a>
                                <a href="#clientes" className="nav-link" onClick={closeMenu}>Clientes</a>
                            </div>
                            <a href="https://wa.me/5511978327970" target="_blank" rel="noopener noreferrer" className="cta-button">Fale com a gente</a>
                        </div>
                    </nav>
                </header>

                {/* Main Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <div className="hero-graphic animate-on-scroll">
                            <div className="logo-container">
                                <img src="/3D_logo.png" alt="MultiPixel Logo" className="logo-m" />
                            </div>
                        </div>
                        <div className="hero-text animate-on-scroll">
                            <h1 className="hero-title">
                                <span className="text-white">Integrando</span>
                                <br />
                                <span className="text-white">a </span>
                                <span className="text-gold">Comunicação</span>
                                <br />
                                <span className="text-white">e a </span>
                                <span className="text-gold">Tecnologia</span>
                                <br />
                                <span className="text-white">com </span>
                                <span className="text-gold">Inteligência</span>
                            </h1>
                            <p className="hero-subtitle">Esse é o valor MultiPixel</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Second Section - Content Area */}
            <section className="content-section" id="sobre">
                <div className="content-container">
                    <div className="content-text animate-on-scroll">
                        <h2 className="content-title">
                            Não somos <span className="text-bold">multi</span> apenas no nome, somos <span className="text-bold">multi</span> no que fazemos
                        </h2>
                        <p className="content-paragraph">
                            Conte com a MultiPixel durante toda a sua jornada ou na etapa que julgar necessária.
                        </p>
                        <p className="content-paragraph">
                            Temos soluções para você, do começo ao fim do seu processo.
                        </p>
                        <p className="content-paragraph">
                            Parece bom demais pra ser verdade?
                        </p>
                        <a href="https://wa.me/5511978327970" target="_blank" rel="noopener noreferrer" className="content-button">
                            Veja como fazemos isso
                        </a>
                    </div>
                    <div className="content-graphic animate-on-scroll">
                        <div className="content-image-container">
                            <img src={ContentImage} alt="MultiPixel Services" className="content-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Third Section - Services */}
            <section className="white-section" id="servicos">
                <div className="white-container">
                    <h2 className="white-title animate-on-scroll">Nossos Serviços</h2>
                    <p className="white-text animate-on-scroll">
                        Oferecemos soluções completas em comunicação social e tecnologia para impulsionar sua marca
                    </p>

                    <div className="services-grid">
                        {/* Card 1 - Comunicação Social */}
                        <div className="service-card animate-on-scroll">
                            <div className="service-icon">
                                <i className="bi bi-camera-video"></i>
                            </div>
                            <h3 className="service-title">Comunicação Social</h3>
                            <div className="service-content">
                                <div className="service-category">
                                    <h4>Filmagem, Fotografia e Edição</h4>
                                    <ul>
                                        <li>Institucionais</li>
                                        <li>Clipes musicais</li>
                                        <li>Campanha política</li>
                                        <li>Infoprodutos (cursos, podcasts, e-books)</li>
                                    </ul>
                                </div>

                                <div className="service-category">
                                    <h4>Transmissão e Cobertura</h4>
                                    <ul>
                                        <li>Transmissão Ao Vivo e Cobertura de Eventos</li>
                                        <li>Locação de Estúdio para Podcast</li>
                                        <li>Locação de Estúdio com Chromakey</li>
                                        <li>Locação de Auditório para Eventos</li>
                                    </ul>
                                </div>

                                <div className="service-category">
                                    <h4>Design e Marketing</h4>
                                    <ul>
                                        <li>Branding</li>
                                        <li>Social Media</li>
                                        <li>Design gráfico (digital e impressos)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - Integração */}
                        <div className="service-card animate-on-scroll">
                            <div className="service-icon">
                                <i className="bi bi-rocket-takeoff-fill"></i>
                            </div>
                            <h3 className="service-title">Integração Completa</h3>
                            <div className="service-content">
                                <div className="service-category">
                                    <h4>Soluções Integradas</h4>
                                    <ul>
                                        <li>Estratégia de comunicação unificada</li>
                                        <li>Presença digital consistente</li>
                                        <li>Automação de processos</li>
                                        <li>Análise e otimização contínua</li>
                                    </ul>
                                </div>

                                <div className="service-category">
                                    <h4>Suporte e Manutenção</h4>
                                    <ul>
                                        <li>Suporte técnico especializado</li>
                                        <li>Atualizações e manutenção</li>
                                        <li>Treinamento da equipe</li>
                                        <li>Consultoria estratégica</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Tecnologia */}
                        <div className="service-card animate-on-scroll">
                            <div className="service-icon">
                                <i className="bi bi-laptop"></i>
                            </div>
                            <h3 className="service-title">Tecnologia</h3>
                            <div className="service-content">
                                <div className="service-category">
                                    <h4>Desenvolvimento Web</h4>
                                    <ul>
                                        <li>Sites Institucionais</li>
                                        <li>Landing Pages</li>
                                    </ul>
                                </div>

                                <div className="service-category">
                                    <h4>Sistemas e Automação</h4>
                                    <ul>
                                        <li>Automações e Sistemas</li>
                                        <li>Infraestrutura em Nuvem</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fourth Section - PIXeL Methodology */}
            <section className="pixel-section" id="pixel">
                <div className="pixel-container">
                    <div className="pixel-card">
                        <h2 className="pixel-title animate-on-scroll">
                            <span className="pixel-acronym">PIXeL</span> - <span className="pixel-word">P</span>lanejar, <span className="pixel-word">I</span>ntegrar, <span className="pixel-word">eX</span>ecutar e <span className="pixel-word">L</span>ançar
                        </h2>
                        <p className="pixel-description animate-on-scroll">
                            Não importa se seu projeto é de comunicação ou tecnologia, essas quatro etapas são a base da nossa metodologia essenciais.
                        </p>

                        <div className="pixel-diagram animate-on-scroll">
                            <div className={`pixel-step pixel-step-top ${selectedStep === 'top' ? 'selected' : ''}`}
                                onClick={() => {
                                    setCenterText("Integração de canais e plataformas");
                                    setSelectedStep('top');
                                }}>
                                <span className="step-text">Integrar</span>
                            </div>

                            <div className={`pixel-step pixel-step-left ${selectedStep === 'left' ? 'selected' : ''}`}
                                onClick={() => {
                                    setCenterText("Estratégia e planejamento completo");
                                    setSelectedStep('left');
                                }}>
                                <span className="step-text step-highlight">Planejar</span>
                            </div>

                            <div className={`pixel-step pixel-step-right ${selectedStep === 'right' ? 'selected' : ''}`}
                                onClick={() => {
                                    setCenterText("Execução e produção de conteúdo");
                                    setSelectedStep('right');
                                }}>
                                <span className="step-text">eXecutar</span>
                            </div>

                            <div className={`pixel-step pixel-step-bottom ${selectedStep === 'bottom' ? 'selected' : ''}`}
                                onClick={() => {
                                    setCenterText("Lançamento e monitoramento");
                                    setSelectedStep('bottom');
                                }}>
                                <span className="step-text">Lançar</span>
                            </div>

                            <div className="pixel-center">
                                <span className="center-text">{centerText}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fifth Section - Clients and Partners */}
            <section className="clients-section" id="clientes">
                <div className="clients-container">
                    <h2 className="clients-title animate-on-scroll">Nossos Clientes e Parceiros</h2>
                    <p className="clients-text animate-on-scroll">
                        Empresas que confiam na MultiPixel para suas soluções de comunicação e tecnologia
                    </p>

                    <div className="clients-grid">
                        {/* Cliente 1 */}
                        <a href="https://echotap.com.br" target="_blank" rel="noopener noreferrer" className="client-card animate-on-scroll bg-white">
                            <div className="client-logo">
                                <img src={Cliente1} alt="EchoTap" className="client-image" />
                            </div>
                            <div className="client-overlay"></div>
                        </a>

                        {/* Cliente 2 */}
                        <a href="https://www.portalbereana.com.br" target="_blank" rel="noopener noreferrer" className="client-card animate-on-scroll bg-white">
                            <div className="client-logo">
                                <img src={Cliente2} alt="Bereana" className="client-image" />
                            </div>
                            <div className="client-overlay"></div>
                        </a>

                        {/* Cliente 3 */}
                        <a href="https://mide.com.br" target="_blank" rel="noopener noreferrer" className="client-card animate-on-scroll bg-black">
                            <div className="client-logo">
                                <img src={Cliente3} alt="Ministério IDE" className="client-image" />
                            </div>
                            <div className="client-overlay"></div>
                        </a>

                        {/* Cliente 4 */}
                        <a href="https://selfspiral.com.br" target="_blank" rel="noopener noreferrer" className="client-card animate-on-scroll bg-white">
                            <div className="client-logo">
                                <img src={Cliente4} alt="⁠SelfSpiral" className="client-image" />
                            </div>
                            <div className="client-overlay"></div>
                        </a>

                        {/* Cliente 5 */}
                        <a href="https://diamondlog.tec.br" target="_blank" rel="noopener noreferrer" className="client-card animate-on-scroll bg-black">
                            <div className="client-logo">
                                <img src={Cliente5} alt="Diamond Log" className="client-image" />
                            </div>
                            <div className="client-overlay"></div>
                        </a>

                        {/* Cliente 6 */}
                        <a href="https://www.instagram.com/bikusrotisserie" target="_blank" rel="noopener noreferrer" className="client-card animate-on-scroll bg-white">
                            <div className="client-logo">
                                <img src={Cliente6} alt="Biku's Rotisserie" className="client-image" />
                            </div>
                            <div className="client-overlay"></div>
                        </a>

                        {/* Cliente 7 */}
                        <a href="https://www.instagram.com/bikus.confeitaria" target="_blank" rel="noopener noreferrer" className="client-card animate-on-scroll bg-black">
                            <div className="client-logo">
                                <img src={Cliente7} alt="⁠⁠Biku's Confeitaria" className="client-image" />
                            </div>
                            <div className="client-overlay"></div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <a href="/"><img src={Logo} alt="MultiPixel Logo" className="footer-logo-img" /></a>
                        </div>

                        <div className="footer-links">
                            <a href="#" className="footer-link">Início</a>
                            <a href="#sobre" className="footer-link">Sobre</a>
                            <a href="#servicos" className="footer-link">Serviços</a>
                            <a href="#pixel" className="footer-link">Metodologia</a>
                            <a href="#clientes" className="footer-link">Clientes</a>
                            <a href="https://wa.me/5511978327970" target="_blank" rel="noopener noreferrer" className="footer-link">Contato</a>
                        </div>
                    </div>

                    {/* Footer Divider */}
                    <div className="footer-divider"></div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="footer-copyright">© 2025 MultiPixel. Todos os direitos reservados.</p>
                        <p className="footer-slogan">Integrando comunicação e tecnologia com inteligência.</p>
                    </div>
                </div>
            </footer>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/5511978327970"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                aria-label="Fale conosco no WhatsApp"
            >
                <i className="bi bi-whatsapp whatsapp-icon"></i>
            </a>
        </div>
    );
};

export default Home;


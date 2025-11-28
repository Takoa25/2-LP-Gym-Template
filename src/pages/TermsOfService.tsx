import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { content } from '../Content';
import SEO from '../components/SEO';

const TermsOfService: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            <SEO title="Termos de Uso" />
            {/* Header */}
            <header className="sticky top-0 z-50 bg-zinc-950 border-b border-white/10">
                <div className="container mx-auto px-4 md:px-8 py-4">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-semibold">Voltar para o site</span>
                    </a>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-4xl">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
                    TERMOS DE USO E SERVIÇO
                </h1>

                <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            Termos de Uso e Serviço da {content.infos.name}
                        </h2>
                        <p>
                            Seja Bem-Vindo ao site da <strong className="text-white">{content.infos.name}</strong>. Antes de explorar tudo o que temos a oferecer, é importante que você entenda e concorde com algumas regras básicas que regem o uso do nosso site, e qualquer outro serviço digital que nós oferecemos, como lojas e plataformas de e-commerce.
                        </p>
                        <p>
                            Ao usar nosso site e serviços, você automaticamente concorda em seguir as regras que estabelecemos aqui. Caso não concorde com algo, por favor, considere não usar nossos serviços. É muito importante para nós que você se sinta seguro e informado a todo momento.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            1. Aceitando os Termos
                        </h2>
                        <p>
                            Ao navegar e usar o site da <strong className="text-white">{content.infos.name}</strong>, você concorda automaticamente com nossas regras e condições. Estamos sempre procurando melhorar, então esses termos podem mudar de vez em quando. Se fizermos alterações significativas, vamos postar as atualizações aqui no site. Continuar usando o site após essas mudanças significa que você aceita os novos termos.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            2. Como Usar o Nosso Site
                        </h2>
                        <p>
                            A maior parte do nosso site está aberta para você sem a necessidade de cadastro. No entanto, algumas seções especiais podem exigir que você crie uma conta. Pedimos que você seja honesto ao fornecer suas informações e que mantenha sua senha e login seguros.
                        </p>
                        <p>
                            Se decidir compartilhar algum conteúdo conosco, como comentários, por favor, faça-o de maneira respeitosa e dentro da lei.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            3. Sua Privacidade
                        </h2>
                        <p>
                            Na <strong className="text-white">{content.infos.name}</strong>, a privacidade é um valor essencial. Ao interagir com nosso site, você aceita nossa <strong className="text-white">Política de Privacidade</strong>, que detalha nossa abordagem responsável e conforme às leis para o manejo dos seus dados pessoais.
                        </p>
                        <p>
                            Nosso compromisso é com a transparência e a segurança: explicamos como coletamos, usamos e protegemos suas informações, garantindo sua privacidade e oferecendo controle sobre seus dados.
                        </p>
                        <p>
                            Adotamos práticas de segurança para proteger suas informações contra acesso não autorizado e compartilhamento indevido, assegurando que qualquer cooperação com terceiros ocorra apenas com base na sua aprovação ou exigências legais claras, reafirmando nosso comprometimento com a sua confiança e segurança digital.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            4. Direitos de Conteúdo
                        </h2>
                        <p>
                            O conteúdo disponível no site da <strong className="text-white">{content.infos.name}</strong>, incluindo, mas não se limitando a, textos, imagens, ilustrações, designs, ícones, fotografias, programas de computador, videoclipes e áudios, constitui propriedade intelectual protegida tanto pela legislação nacional quanto por tratados internacionais sobre direitos autorais e propriedade industrial.
                        </p>
                        <p>
                            Essa propriedade engloba não apenas materiais diretamente produzidos e publicados por nós, mas também conteúdos que são utilizados sob licença ou permissão de terceiros, garantindo que todos os direitos sejam respeitados conforme as normativas vigentes.
                        </p>
                        <p>
                            Ao acessar nosso site, você recebe uma licença limitada, não exclusiva e revogável para visualizar e usar o conteúdo para fins pessoais e não comerciais.
                        </p>
                        <p>
                            Isso implica que <strong className="text-white">qualquer reprodução, distribuição, transmissão ou modificação do conteúdo, sem a devida autorização escrita da {content.infos.name}, é estritamente proibida</strong>.
                        </p>
                        <p>
                            Tal restrição visa proteger os direitos de propriedade intelectual associados aos materiais disponibilizados, assegurando que sua utilização não infrinja os direitos dos criadores ou detentores desses direitos, além de promover um ambiente de respeito e valorização da criatividade e inovação.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            5. Cookies e Mais
                        </h2>
                        <p>
                            Utilizamos cookies para melhorar sua experiência, coletando informações anônimas durante sua visita, como suas preferências de idioma, duração da visita, páginas acessadas e outras estatísticas de uso.
                        </p>
                        <p>
                            Esses dados nos ajudam a personalizar seu conteúdo, otimizar a navegação, melhorar continuamente o site em design e funcionalidade, e garantir sua segurança online.
                        </p>
                        <p>
                            Esta prática é essencial para nos permitir oferecer um serviço mais ajustado às suas necessidades e resolver qualquer problema que possa surgir mais rapidamente.
                        </p>
                        <p>
                            Se você preferir limitar ou recusar o uso de cookies, a configuração pode ser ajustada através do seu navegador. Isso pode afetar a sua experiência no site, pois algumas funcionalidades dependem dos cookies para funcionar corretamente.
                        </p>
                        <p>
                            Entendemos a importância do controle sobre suas informações e queremos que você saiba que, ao ajustar as configurações para bloquear cookies, algumas partes do nosso site podem não oferecer a experiência completa pretendida.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            6. Explorando Links Externos
                        </h2>
                        <p>
                            Nossa plataforma pode incluir links para sites externos que achamos que podem ser do seu interesse. Note que não temos controle sobre esses sites externos e, portanto, <strong className="text-white">não somos responsáveis por seu conteúdo ou políticas</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            7. Mudanças e Atualizações
                        </h2>
                        <p>
                            A evolução é parte de como operamos, o que significa que estes Termos de Uso podem passar por atualizações para refletir melhor as mudanças em nossos serviços ou na legislação.
                        </p>
                        <p>
                            Sempre que isso acontecer, você encontrará a versão mais recente disponível aqui. Se as mudanças forem significativas, faremos o possível para notificá-lo através dos meios de contato que você nos forneceu.
                        </p>
                        <p>
                            Continuar a acessar o site após essas mudanças indica que você concorda com os novos termos.
                            Se, por qualquer motivo, você não concordar com as atualizações, pedimos que não continue utilizando nosso site e serviços.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            Dúvidas ou Comentários?
                        </h2>
                        <p>
                            Se tiver dúvidas sobre estes termos, não hesite em nos contatar através do e-mail{' '}
                            <a href={`mailto:${content.infos.email}`} className="text-primary hover:underline font-semibold">
                                {content.infos.email}
                            </a>
                            .
                        </p>
                    </section>
                </div>

                {/* Back to top button */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-white text-primary-contrast rounded-full font-semibold transition-all duration-300"
                    >
                        Voltar ao topo
                    </button>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-zinc-900 border-t border-white/10 py-8">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <p className="text-zinc-400 text-sm">
                        © {new Date().getFullYear()} {content.infos.name}. {content.footer.copyright}
                    </p>
                    <p className="text-zinc-500 text-xs mt-2">
                        {content.footer.developedBy}
                        <a
                            href={content.footer.developerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-primary transition-colors"
                        >
                            {content.footer.developerName}
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default TermsOfService;

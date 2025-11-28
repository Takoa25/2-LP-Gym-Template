import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { content } from '../Content';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            <SEO title="Política de Privacidade" />
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
                    POLÍTICA DE PRIVACIDADE
                </h1>

                <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            Política de Privacidade da {content.infos.name}
                        </h2>
                        <p>
                            Bem-vindo à {content.infos.name}, inscrita no CNPJ {content.infos.cnpj}, com sede na {content.infos.address}. Nosso compromisso é com a integridade e a segurança dos dados pessoais dos nossos usuários e clientes. Esta Política de Privacidade aplica-se a todas as interações digitais realizadas em nosso site, serviços associados, aplicativos móveis e outras plataformas digitais sob nosso controle.
                        </p>
                        <p>
                            Ao acessar e utilizar nossas plataformas, você reconhece e concorda com as práticas descritas nesta política. Nós tratamos a proteção de seus dados pessoais com a máxima seriedade e nos comprometemos a processá-los de forma responsável, transparente e segura.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            Definições
                        </h2>
                        <p>
                            "Dados Pessoais" são informações que identificam ou podem identificar uma pessoa natural.
                        </p>
                        <p>
                            "Dados Pessoais Sensíveis" são informações que revelam características pessoais íntimas, como origem racial, convicções religiosas, opiniões políticas, dados genéticos ou biométricos.
                        </p>
                        <p>
                            "Tratamento de Dados Pessoais" abrange qualquer operação com Dados Pessoais, como coleta, registro, armazenamento, uso, compartilhamento ou destruição.
                        </p>
                        <p>
                            "Leis de Proteção de Dados" são todas as leis que regulamentam o Tratamento de Dados Pessoais, incluindo a LGPD (Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/18).
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            Dados Coletados e Motivos da Coleta
                        </h2>
                        <p>Nós coletamos e processamos os seguintes tipos de dados pessoais:</p>

                        <h3 className="font-bold text-xl text-white mt-6 mb-3">Informações Fornecidas por Você</h3>
                        <p>
                            Isso inclui, mas não se limita a, nome, sobrenome, endereço de e-mail, endereço físico, informações de pagamento e quaisquer outras informações que você optar por fornecer ao criar uma conta, fazer uma compra ou interagir com nossos serviços de atendimento ao cliente.
                        </p>

                        <h3 className="font-bold text-xl text-white mt-6 mb-3">Informações Coletadas Automaticamente</h3>
                        <p>
                            Quando você visita nosso site, coletamos automaticamente informações sobre seu dispositivo e sua interação com nosso site. Isso pode incluir dados como seu endereço IP, tipo de navegador, detalhes do dispositivo, fuso horário, páginas visitadas, produtos visualizados, sites ou termos de busca que o direcionaram ao nosso site, e informações sobre como você interage com nosso site.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            Uso de Cookies e Tecnologias de Rastreamento
                        </h2>
                        <p>
                            A {content.infos.name} utiliza cookies, que são pequenos arquivos de texto armazenados no seu dispositivo, e outras tecnologias de rastreamento para melhorar a experiência do usuário em nosso site, entender como nossos serviços são utilizados e otimizar nossas estratégias de marketing.
                        </p>

                        <h3 className="font-bold text-xl text-white mt-6 mb-3">Tipos de Cookies Utilizados:</h3>

                        <p>
                            <strong className="text-white">Cookies Essenciais:</strong> Essenciais para o funcionamento do site, permitindo que você navegue e use suas funcionalidades. Sem esses cookies, serviços como carrinho de compras e processamento de pagamento não podem ser fornecidos.
                        </p>

                        <p>
                            <strong className="text-white">Cookies de Desempenho e Analíticos:</strong> Coletam informações sobre como os visitantes usam o nosso site, quais páginas são visitadas com mais frequência e se eles recebem mensagens de erro. Esses cookies são usados apenas para melhorar o desempenho e a experiência do usuário no site.
                        </p>

                        <p>
                            <strong className="text-white">Cookies de Funcionalidade:</strong> Permitem que o site lembre de escolhas que você faz (como seu nome de usuário, idioma ou a região em que você está) e forneça recursos aprimorados e mais pessoais.
                        </p>

                        <p>
                            <strong className="text-white">Cookies de Publicidade e Redes Sociais:</strong> Usados para oferecer anúncios mais relevantes para você e seus interesses. Eles também são usados para limitar o número de vezes que você vê um anúncio, bem como ajudar a medir a eficácia das campanhas publicitárias.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            Finalidades do Processamento de Dados
                        </h2>
                        <p>Os dados coletados são utilizados para:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Proporcionar, operar e melhorar nossos serviços e ofertas;</li>
                            <li>Processar suas transações e enviar notificações relacionadas a suas compras;</li>
                            <li>Personalizar sua experiência de usuário e recomendar conteúdo ou produtos que possam ser do seu interesse;</li>
                            <li>Comunicar informações importantes, ofertas e promoções, conforme sua preferência de comunicação;</li>
                            <li>Realizar análises internas para desenvolver e aprimorar nossos serviços;</li>
                            <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            Compartilhamento e Transferência de Dados Pessoais
                        </h2>
                        <p>Nós podemos compartilhar seus dados pessoais com terceiros nas seguintes circunstâncias:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Com fornecedores de serviços e parceiros que nos auxiliam nas operações de negócio, desde que estes atuem em conformidade com nossas diretrizes de proteção de dados e com a legislação aplicável;</li>
                            <li>Para cumprir com obrigações legais, responder a processos judiciais, ou proteger nossos direitos e propriedades, bem como a segurança de nossos clientes e do público;</li>
                            <li>Em caso de reestruturação corporativa, venda, fusão ou outra transferência de ativos, garantindo que a entidade receptora concorde em respeitar a privacidade de seus dados de acordo com uma política equivalente à nossa.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            Links para outros sites e redes sociais
                        </h2>
                        <p>
                            Nossa plataforma pode incluir links para sites externos de parceiros, anunciantes e fornecedores. Clicar nesses links implica que você será direcionado para fora do nosso site, entrando em domínios que seguem suas próprias políticas de privacidade, pelas quais não somos responsáveis.
                        </p>
                        <p>
                            Recomendamos a leitura atenta dessas políticas antes de fornecer qualquer dado pessoal. Da mesma forma, não assumimos responsabilidade pelas práticas de privacidade de terceiros como Facebook, Apple, Google e Microsoft. Aconselhamos você a se informar sobre as políticas de privacidade dessas entidades ao utilizar seus serviços ou aplicativos.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            Direitos dos Titulares dos Dados
                        </h2>
                        <p>Você possui diversos direitos em relação aos seus dados pessoais, incluindo:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>O direito de acesso, retificação ou exclusão de seus dados pessoais sob nossa posse;</li>
                            <li>O direito de limitar ou se opor ao nosso processamento de seus dados;</li>
                            <li>O direito à portabilidade de dados;</li>
                            <li>O direito de retirar seu consentimento a qualquer momento, quando o processamento for baseado em consentimento.</li>
                        </ul>
                        <p>
                            Para exercer esses direitos, entre em contato conosco através de{' '}
                            <a href={`mailto:${content.infos.email}`} className="text-primary hover:underline">
                                {content.infos.email}
                            </a>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            Segurança dos Dados
                        </h2>
                        <p>
                            Implementamos medidas de segurança técnica e organizacional para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, é importante notar que nenhum sistema é completamente seguro. Nos comprometemos a notificar você e qualquer autoridade aplicável de quaisquer brechas de segurança de acordo com a legislação vigente.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            Alterações na Política de Privacidade
                        </h2>
                        <p>
                            Nossa Política de Privacidade pode ser atualizada periodicamente. A versão mais atual será sempre publicada em nosso site, indicando a data da última revisão. Encorajamos você a revisar regularmente nossa política para estar sempre informado sobre como estamos protegendo seus dados.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                            Contato
                        </h2>
                        <p>
                            Se tiver dúvidas ou preocupações sobre nossa Política de Privacidade ou práticas de dados, por favor, não hesite em nos contatar em{' '}
                            <a href={`mailto:${content.infos.email}`} className="text-primary hover:underline">
                                {content.infos.email}
                            </a>
                            . Estamos comprometidos em resolver quaisquer questões relacionadas à privacidade de nossos usuários e clientes.
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

export default PrivacyPolicy;

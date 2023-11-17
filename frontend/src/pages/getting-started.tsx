import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import styles from '../styles/css.modules/getting-started.module.css';
import GettingStartedInicio from '@/components/getting-started-tabs/inicio';
import GettingStartedGeral from '@/components/getting-started-tabs/geral';
import GettingStartedFreelancer from '@/components/getting-started-tabs/freelancer';
import GettingStartedContratante from '@/components/getting-started-tabs/contratante';
import GettingStartedConfiguracoes from '@/components/getting-started-tabs/configuracoes';
import GettingStartedSeguranca from '@/components/getting-started-tabs/seguranca';
import GettingStartedPagamento from '@/components/getting-started-tabs/pagamento';
import GettingStartedDados from '@/components/getting-started-tabs/dados';

export default function GettingStarted(){
    return (
        <div className={styles.getting_started_page_container}>

            <h1 className={styles.title}>Getting Started</h1>

            <Tabs className={styles.getting_started_wrapper} orientation='vertical' variant="unstyled">
                <div className={styles.getting_started_menu}>
                    <TabList className={styles.tablist_itens}>
                        <Tab className={styles.tablist_iten}>Início</Tab>
                        <Tab className={styles.tablist_iten}>Geral</Tab>
                        <Tab className={styles.tablist_iten}>Freelancer</Tab>
                        <Tab className={styles.tablist_iten}>Contratante</Tab>
                        <Tab className={styles.tablist_iten}>Configurações</Tab>
                        <Tab className={styles.tablist_iten}>Segurança</Tab>
                        <Tab className={styles.tablist_iten}>Pagamento</Tab>
                        <Tab className={styles.tablist_iten}>Dados</Tab>
                    </TabList>
                </div>

                <div className={styles.getting_started_content}>
                    <TabPanels>
                        <TabPanel>
                            <GettingStartedInicio />
                        </TabPanel>
                        <TabPanel>
                            <GettingStartedGeral />
                        </TabPanel>
                        <TabPanel>
                            <GettingStartedFreelancer />
                        </TabPanel>
                        <TabPanel>
                            <GettingStartedContratante />
                        </TabPanel>
                        <TabPanel>
                            <GettingStartedConfiguracoes />
                        </TabPanel>
                        <TabPanel>
                            <GettingStartedSeguranca />
                        </TabPanel>
                        <TabPanel>
                            <GettingStartedPagamento />
                        </TabPanel>
                        <TabPanel>
                            <GettingStartedDados />
                        </TabPanel>
                    </TabPanels>
                </div>
            </Tabs> 
        </div>
    )
}
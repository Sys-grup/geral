/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.pmsys.oshi;

import com.mycompany.pmsys.ConnectURL;
import java.util.Date;
import javax.swing.JOptionPane;
import org.quartz.CronScheduleBuilder;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.impl.StdSchedulerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
/**
 *
 * @author Aluno
 */
public class Executer {

    private static int idFuncionario = 1000;
    
    public static void main(String[] args) throws Exception {
        
        logou();
        
        JobDetail job = JobBuilder.newJob(OshiDados.class).build();													  //("0 0 10 1/1 * ? *") Produção

        Trigger tarefa = (Trigger) TriggerBuilder.newTrigger()
                .withIdentity("CronTrigger")
                    .withSchedule(CronScheduleBuilder
                        .cronSchedule("0 0/5 * 1/1 * ? *")).build();
        
        Scheduler sc = StdSchedulerFactory.getDefaultScheduler();
        sc.start();
        sc.scheduleJob(job, (org.quartz.Trigger) tarefa);
        System.out.println("Iniciando envio de dados ao Banco");
       
    }
    
    private static void logou(){
        ConnectURL conn = new ConnectURL();
        JdbcTemplate jdbcTemplate = new JdbcTemplate(conn.getDataSource());
        
        try{
            jdbcTemplate.update("INSERT INTO tblStatusFuncionario values (?, ?, ?)", new Date(), null, idFuncionario);
            
            System.out.println("Usuário Logado");
        }
        catch(Exception e){
            JOptionPane.showMessageDialog(null, "Erro do Sql \n" + e, "Erro", JOptionPane.ERROR_MESSAGE);
        }
    }
}

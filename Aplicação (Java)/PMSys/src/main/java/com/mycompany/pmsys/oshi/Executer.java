/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.pmsys.oshi;

import org.quartz.CronScheduleBuilder;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.impl.StdSchedulerFactory;

/**
 *
 * @author Aluno
 */
public class Executer {

    public static void main(String[] args) throws Exception {
        
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
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.pmsys.oshi;

import com.mycompany.pmsys.ConnectURL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.swing.JOptionPane;
import org.springframework.jdbc.core.JdbcTemplate;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.util.Util;

/**
 *
 * @author Ultim
 */
public class DadosCPU {
    
    //Variaveis de CPU
    private double user;
    private double system;
    private double iowait;
    private String cpuName;
    private Double totalUsadoCPU;
    
    
    private final HardwareAbstractionLayer dados = new SystemInfo().getHardware();
    private final CentralProcessor cpu = dados.getProcessor();
    
    private void usoCPU(){
        
        cpuName = cpu.getName();
        
        long[] cpuTicks;
        long[] prevCpuTicks;
        prevCpuTicks = cpu.getSystemCpuLoadTicks();
        Util.sleep(5000);
        
        cpuTicks = cpu.getSystemCpuLoadTicks();
        
        long user = (cpuTicks[CentralProcessor.TickType.USER.getIndex()] - prevCpuTicks[CentralProcessor.TickType.USER.getIndex()]);
        long sys = (cpuTicks[CentralProcessor.TickType.SYSTEM.getIndex()] - prevCpuTicks[CentralProcessor.TickType.SYSTEM.getIndex()]);
        long iowait = (cpuTicks[CentralProcessor.TickType.IOWAIT.getIndex()] - prevCpuTicks[CentralProcessor.TickType.IOWAIT.getIndex()]);
        
        long nice = (cpuTicks[CentralProcessor.TickType.NICE.getIndex()] - prevCpuTicks[CentralProcessor.TickType.NICE.getIndex()]);
        long idle = (cpuTicks[CentralProcessor.TickType.IDLE.getIndex()] - prevCpuTicks[CentralProcessor.TickType.IDLE.getIndex()]);      
        long irq = (cpuTicks[CentralProcessor.TickType.IRQ.getIndex()] - prevCpuTicks[CentralProcessor.TickType.IRQ.getIndex()]);
        long softirq = (cpuTicks[CentralProcessor.TickType.SOFTIRQ.getIndex()] - prevCpuTicks[CentralProcessor.TickType.SOFTIRQ.getIndex()]);
        long steal = (cpuTicks[CentralProcessor.TickType.STEAL.getIndex()] - prevCpuTicks[CentralProcessor.TickType.STEAL.getIndex()]);
        
        long totalcpu = user + nice + sys + idle + iowait + irq + softirq + steal;
        
        this.user = (100d * user) / totalcpu;
        this.system = (100d * sys) / totalcpu;
        this.iowait = (100d * iowait) / totalcpu;
        
        totalUsadoCPU = (100d * (user + sys + iowait)) / totalcpu;
        
    }
    
    public void insereDadosCPU(){
        
                ConnectURL dadosConexao = new ConnectURL();
       JdbcTemplate jdbcTemplate = new JdbcTemplate(dadosConexao.getDataSource());
       
       try{
       jdbcTemplate.update("INSERT INTO tblInfoCPU values (?, ?, ?, ?, ?)", this.cpuName, this.user,this.system, this.totalUsadoCPU, 1000);
       }
       catch (Exception e){
           JOptionPane.showMessageDialog(null, "Erro do Sql \n" + e, "Erro", JOptionPane.ERROR_MESSAGE);
    
       }
//        
//        Connection conn = ConnectURL.conexao();
//        
//        try{
//            String insertCPU = "INSERT INTO tblInfoCPU values (?, ?, ?, ?, ?)";
//            PreparedStatement stmt = conn.prepareStatement(insertCPU);
//            
//            this.usoCPU();
//            
//            stmt.setString(1, this.cpuName);
//            stmt.setDouble(2, this.user);
//            stmt.setDouble(3, this.system);
//            stmt.setDouble(4, this.totalUsadoCPU);
//            stmt.setInt(5, 1000);
//            
//            stmt.execute();
//            
//            System.out.println("Dados de CPU inseridos com sucesso!");
//        }catch(SQLException ex){
//            JOptionPane.showMessageDialog(null, "Erro do Sql \n" + ex, "Erro", JOptionPane.ERROR_MESSAGE);
//        }
//    }
    
    
    }   
}

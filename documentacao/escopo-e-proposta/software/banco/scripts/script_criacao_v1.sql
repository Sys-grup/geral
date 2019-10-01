CREATE TABLE tblContas (
    idConta int primary key identity(1,1),
    login varchar(50) not null,
    senha varchar(256)
)

CREATE TABLE tblSquad (
    idSquad int primary key identity(1,1),
    apelidoSquad varchar(20) not null,
    areaSquad varchar(20),
    fkConta int foreign key references tblContas(idConta)
)


CREATE TABLE tblCargo (
    idCargo int primary key identity(1,1),
    nomeCargo varchar(40) not null,
)

CREATE TABLE tblMaquina (
    idMaquina int primary key identity(1000, 1),
    apelidoMaquina varchar(140),
)

CREATE TABLE tblFuncionario (
    idFuncionario int primary key identity(1000,1),
    identificador varchar(30),
    nomeFuncionario varchar(90) not null,
    fkSquad int foreign key references tblSquad(idSquad),
    fkCargo int foreign key references tblCargo(idCargo),
    fkMaquina int foreign key references tblMaquina(idMaquina)
)

CREATE TABLE tblSoftware (
    idSoftware int primary key identity (100, 1),
    nomeSoftware varchar(200) not null
)

CREATE TABLE tblMaquina_Software (
    idCaptura int primary key identity(1,1),
    fkMaquina int foreign key references tblMaquina(idMaquina),
    fkSoftware int foreign key references tblSoftware(idSoftware),
    dataInicio datetime not null,
    tempoDeUso timestamp null
)

CREATE TABLE tblInfoProcessamento (
    idInfoPro int primary key identity(10000, 1),
    infoCPU decimal(12,2) not null,
    infoRAM decimal(12,2) not null,
    infoHD decimal(12,2) not null,
    dataCapturada datetime not null,
    fkMaquina int foreign key references tblMaquina(idMaquina)
)
use escuela;


select m.nombre, count(i.idEstudiantes) as cant_estudiantes
from materias m
inner join inscripciones i on m.idMaterias = i.idMaterias
group by m.idMaterias, m.nombre, m.codigo
having cant_estudiantes > 5
order by cant_estudiantes desc;


select insc.nombre, round(avg(i.nota), 2) promedio
from (
	select m.nombre, count(i.idEstudiantes) as cant_estudiantes, m.idMaterias
	from materias m
	inner join inscripciones i on m.idMaterias = i.idMaterias
	group by m.idMaterias, m.nombre, m.codigo
	having cant_estudiantes > 5
	order by cant_estudiantes desc) as insc
inner join inscripciones i on insc.idMaterias = i.idMaterias
group by insc.idMaterias
having promedio > 8
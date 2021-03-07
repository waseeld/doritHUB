import psutil  #import package
memdict = {} #this is object but in python we called it as dict (dictionary)

meminfo = psutil.virtual_memory()
memdict['totalMem'] = meminfo.total
memdict['available'] = meminfo.available
memdict['cpuPercent'] = meminfo.percent
memdict['usedMem'] = meminfo.used
memdict['freeMem'] = meminfo.free
memdict['activeMem'] = meminfo.active
# memdict['inactiveMem'] = meminfo.inactive
memdict['cached'] = meminfo.cached

print(memdict)